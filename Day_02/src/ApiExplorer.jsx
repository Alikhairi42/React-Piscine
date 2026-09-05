import {useState, useEffect} from 'react';

export default function ApiExplorer() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    
    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/users')
         .then((response) => response.json())
         .then((data) => { 
             setData(data);
             setLoading(false);
         });
    },[]);

    const filteredUsers = data.filter(user => 
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return(
        <div>
            <h1>API ApiExplorer</h1>
            <input 
                type='text' 
                placeholder='Search users ...' 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ marginBottom: '20px', padding: '5px' }}
            />
            {loading ? (<p>loading..</p>) : (
                <ul>
                    {filteredUsers.map(user => ( // <-- Tsshih 2: 'filteredUsers' machi 'data'
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}