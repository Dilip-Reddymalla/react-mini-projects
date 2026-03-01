import { useState, useEffect } from "react";
import "./App.css";


function App() {
  const [userName, setUserName] = useState("");
  const [searchMode, setSearchMode] = useState(false);
  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(false);
  const url = "https://api.github.com/users/";
  const userRepos = "https://api.github.com/users/" + userName + "/repos?sort=updated&direction=desc";
  useEffect(()=>{
    async function fetchData(){
      setLoading(true);
      try {
        const response = await fetch(url + userName);
        const data = await response.json();
        
        if (data.message === "Not Found") {
          setProfileData({ userdata: null, reposdata: [] });
        } else {
          const reposResponse = await fetch(userRepos);
          const reposData = await reposResponse.json();
          setProfileData({
            userdata: data,
            reposdata: reposData
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
        setSearchMode(false);
      }
    }
    if(searchMode && userName.trim() !== ""){
      fetchData();
    } else if (searchMode) {
      setSearchMode(false);
    }
  }, [searchMode, userName, url, userRepos])
  return (
    <div className="App">
      <h1>GitHub Profile Finder</h1>
      <div className="input">
        <input 
          type="text" 
          placeholder="Enter the user name" 
          onChange={(e) =>{setUserName(e.target.value)}} 
          onKeyDown={(e) => { if(e.key === "Enter") setSearchMode(true); }}
        />
        <button onClick={() => setSearchMode(true)}>Search</button>
      </div>
      <div className="profile">
        {
          loading ? (
            <p className="loading-text">Loading...</p>
          ) : profileData.userdata ? (
             <div className="profile_data">
              <img src={profileData.userdata.avatar_url || "default-avatar.png"} alt="Profile" />
              <h2>{profileData.userdata.name || profileData.userdata.login || "No name available"}</h2>
              <p className="bio">{profileData.userdata.bio || "No bio available"}</p>
              
              <div className="stats">
                <div className="stat-item">
                  <span className="stat-value">{profileData.userdata.followers || 0}</span>
                  <span className="stat-label">Followers</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">{profileData.userdata.following || 0}</span>
                  <span className="stat-label">Following</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">{profileData.userdata.public_repos || profileData.reposdata?.length || 0}</span>
                  <span className="stat-label">Repos</span>
                </div>
              </div>

              <h3>Repositories</h3>
              <ul>
                {profileData.reposdata?.length > 0 ? [...profileData.reposdata]
                  .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
                  .map((repo) => (
                  <li className="repoes" key={repo.id}>
                    <div className="link">
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-name" title={repo.name}>
                        {repo.name}
                      </a>
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-link-btn">
                        Code
                      </a>
                    </div>
                    <p className="repo-desc">{repo.description || "No description available"}</p>
                    <div className="repo-meta">
                      <span className="stars">⭐ {repo.stargazers_count || 0}</span>
                      <span>Updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
                    </div>
                  </li>
                )) : <p>No repositories available</p>}
              </ul>
            </div>
          ) : (
            <p className="loading-text">No user found. Search for a valid GitHub username.</p>
          )
        }
      </div>
    </div>
  );
}

export default App;
