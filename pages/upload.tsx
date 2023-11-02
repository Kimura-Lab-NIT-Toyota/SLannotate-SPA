import { API, Auth } from "aws-amplify";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  return (
    <main>
      <input
        type="file"
        accept="video/*"
        onChange={(e) => {
          const file = e.target.files[0];
          if (!file) return;
          const reader = new FileReader();
          reader.onload = async (e) => {
            //get files from event
            const dataUrl = e.target.result;
            const fileName = file.name;

            //get user info, token
            const user = await Auth.currentAuthenticatedUser();
            const userName = user.username;
            const token = user.signInUserSession.idToken.jwtToken;

            const init = {
              headers: {
                Authorization: token,
              },
              body: dataUrl,
            };
            //upload file with using API
            const result = await API.put(
              "slannotate",
              `users/${userName}/files/${fileName}`,
              init
            );
            //handle error
            if (result.error) {
              console.error(`Failed to upload file: ${result.error}`);
            } else {
              router.push("/list");
            }
          };
          //read file as dataUrl, then call onload function above
          reader.readAsDataURL(file);
        }}
      />
    </main>
  );
}
