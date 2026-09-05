import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
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
            {filteredUsers.map(user => (
                <li key={user.id} style={{ marginBottom: '8px' }}>
                <Link to={`/user/${user.id}`}>{user.name}</Link>
                </li>
            ))}
            </ul>
            )}
        </div>
    );
}