import { TwitterFollorCard } from "./TwitterFollowCard";

const users = [
    {
        username: "midudev",
        name: "Miguel Angel Durán",
        isFollowing: true,
    },
    {
        username: "unkown",
        name: "Julián Martín",
        isFollowing: true,
    },
    {
        username: "THChein",
        name: "Tomas",
        isFollowing: false,
    },
    {
        username: "sindex",
        name: "Gomez Porter",
        isFollowing: false,
    },
];

export function App() {
    return (
        <div className="App">
            {users.map((user) => {
                const { username, name, isFollowing } = user;
                return (
                    <TwitterFollorCard
                        key={username}
                        username={username}
                        name={name}
                        initialIsFollowing={isFollowing}
                    />
                );
            })}
        </div>
    );
}
