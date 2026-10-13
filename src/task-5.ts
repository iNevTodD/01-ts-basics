type logStatus = (status: "loading" | "success" | "error") => void;

const log: logStatus = (status) => {
  if (status === "loading") {
    console.log("Loading...");
  } else if (status === "success") {
    console.log("Success!");
  } else if (status === "error") {
    console.log("Something went wrong");
  }
}

log("loading");
