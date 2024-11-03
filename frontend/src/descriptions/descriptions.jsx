import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const Description = () => {
  const { index } = useContext(UserContext);

  const destinations = [
    { 
      name: "Kashmir",
      description:
        "Kashmir, known as 'Paradise on Earth', is famous for its breathtaking landscapes, lush green valleys, and serene lakes.",
      purpose:
        "Visit Kashmir for its majestic natural beauty, serene lakes, and to experience unparalleled peace. Ideal for nature lovers, photographers, and adventure seekers."
    },
    {
      name: "Fairy Meadows",
      description:
        "Located in Gilgit-Baltistan, Fairy Meadows offers stunning views of Nanga Parbat and is a favorite spot for trekkers and nature lovers.",
      purpose:
        "Fairy Meadows is a must-visit for adventurers and trekkers. It’s a gateway to the iconic Nanga Parbat, offering tranquil, fairytale-like landscapes."
    },
    {
      name: "Naran Kaghan",
      description:
        "Naran Kaghan is famous for its beautiful valleys, rivers, and lakes, offering perfect spots for trekking and camping.",
      purpose:
        "Visit Naran Kaghan for an unforgettable outdoor adventure. The valley is ideal for trekking, camping, and exploring pristine lakes like Saif-ul-Malook."
    },
    {
      name: "Skardu",
      description:
        "Skardu, the gateway to the Karakoram mountain range, is known for its mesmerizing landscapes, tranquil lakes, and base camps for some of the world's highest peaks.",
      purpose:
        "Skardu is perfect for adventurers and mountain lovers. It offers spectacular scenery, historical forts, and access to some of the world's highest mountains."
    },
    {
      name: "Murree",
      description:
        "Murree, a popular hill station, is perfect for family vacations with its cool weather and beautiful pine forests.",
      purpose:
        "Visit Murree for a refreshing retreat from the heat, enjoying the cool climate, scenic hilltops, and a historical ambiance perfect for family vacations."
    },
    {
      name: "Murree (Hostel Experience)",
      description:
        "Murree offers not just natural beauty but also a lively hostel experience.",
      purpose:
        "If you're a solo traveler or backpacker, enjoy Murree's cozy hostels where you can meet fellow travelers and experience the warmth of the local hospitality."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 mt-[100px] to-white shadow-lg rounded-lg p-8 w-full h-screen border border-gray-200 transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
        {destinations[index].name}
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        <strong className="font-semibold">Description:</strong> {destinations[index].description}
      </p>
      <p className="text-gray-700 text-lg leading-relaxed">
        <strong className="font-semibold">Purpose:</strong> {destinations[index].purpose}
      </p>
      
    </div>
  );
};

export default Description;
