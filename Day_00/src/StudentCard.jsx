export default function StudentCard(props) {
    return (
        <div>
            <img src={props.avatar} alt="avatar" width="100" />
            
            <h2>Smiya: {props.name} </h2>
            <p>Niveau: {props.level} </p>
            
            <p>Skills:</p>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {props.skills.map((skill, index) => {
                    return <li key={index}> {skill} </li>;
                })}
            </ul>
        </div>
    );
}