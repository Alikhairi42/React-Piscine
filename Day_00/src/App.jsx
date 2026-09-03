import StudentCard from "./StudentCard";

const studentsData = [   
  {
    id: 1,
    name: "ali",
    level: "Beginner",
    skills: ["c++", "html"],
    avatarURL: "https://api.dicebear.com/7.x/bottts/svg?seed=ali"
  },
  {
    id: 3,
    name: "omar",
    level: "advance",
    skills: ["c++", "html"],
    avatarURL: "https://api.dicebear.com/7.x/bottts/svg?seed=ali"
  },
  {
    id: 2,
    name: "sara",
    level: "level 2",
    skills: ["c++", "html"],
    avatarURL: "https://api.dicebear.com/7.x/bottts/svg?seed=ali"
  }
];

export default function App() {
  return (
    <div>
      {studentsData.map((student) => {
        return (
          <StudentCard 
            key={student.id}
            name={student.name}
            level={student.level}
            skills={student.skills}
            avatar={student.avatarURL}
          />
        );
      })}
    </div>
  );
}