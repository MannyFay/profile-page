import profilePicture from '../assets/profile-picture_500x500.jpg';

function Home() {
  return (
    <>
      <header className="my-10">
        <h1 className="mb-2">Manuel-Hubertus Fay</h1>
        <h2>Software Engineer · Command Liner · Automation Lover</h2>
      </header>
      <div>
        <img
          src={profilePicture}
          className="size-50 rounded-full mx-auto mb-10"
          alt="Profile picture of Manuel-Hubertus Fay"
        />
      </div>
      <p className="mb-6 text-center">- raw page under construction -</p>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 px-4">
        <a
          href="https://x.com/FayManny"
          target="_blank"
          rel="noopener noreferrer"
        >
          X
        </a>
        <span className="text-gray-400">·</span>
        <a
          href="https://www.linkedin.com/in/manuel-hubertus-fay-0483a919a"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <span className="text-gray-400">·</span>
        <a
          href="https://www.xing.com/profile/ManuelHubertus_Fay"
          target="_blank"
          rel="noopener noreferrer"
        >
          XING
        </a>
        <span className="text-gray-400">·</span>
        <a
          href="https://blog.mhfay.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
        <span className="text-gray-400">·</span>
        <a
          href="https://github.com/MannyFay"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <span className="text-gray-400">·</span>
        <a
          href="https://gitlab.com/MannyFay"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitLab
        </a>
        <span className="text-gray-400">·</span>
        <a
          href="https://www.instagram.com/_mannyfay/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <span className="text-gray-400">·</span>
        <a
          href="https://discordapp.com/users/915290890111709234"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord
        </a>
      </div>
    </>
  );
}

export default Home;
