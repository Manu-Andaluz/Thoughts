export const createPost = ({ title, body }: { title: any; body: any }) => {
  const apiUrl = "http://localhost:8000/post/all_posts/"; // Replace with your API endpoint

  const postData = {
    title: title,
    body: body,
    author: 1,
  };

  const headers = {
    "Content-Type": "application/json",
    // Add other headers as needed
  };

  fetch(apiUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(postData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("POST request successful:", data);
      // Handle the response data as needed
    })
    .catch((error) => {
      console.error("Error making POST request:", error);
      // Handle errors
    });
};
