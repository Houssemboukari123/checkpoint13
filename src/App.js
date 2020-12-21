import "./App.css";
import Profile from "./profile/Profile";
import profilePic from "./profilePic.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const List = [
    {
      fullName: "Houssem eddine boukari",
      bio: "here i am",
      profession: "developper",
    },
  ];
  return (
    <div>
      <Profile List={List}>{profilePic}</Profile>
    </div>
  );
}

export default App;
