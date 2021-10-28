import {useSession} from "next-auth/react";
import faker from "faker";
import { useEffect, useState } from "react";
import Story from "./Story";

const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);
  const {data: session} = useSession();

  // El codigo se monta cuando se monta el componente
  useEffect(() => {
    //Usamos faker para generar arrays de fake users
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-20 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-green-500">

{session && (
  <Story img={session.user.image} username={session.user.username} />
)}

      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}

    </div>
  );
};

export default Stories;
