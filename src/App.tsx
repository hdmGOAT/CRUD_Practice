import React, { useState, useEffect } from 'react'
import { supabase } from './createClient'
import "./App.css"
const App = () => {

  const [users, setUsers] = useState<any[]>([])


  useEffect(() => {
    fetchUsers()
  }, [])


  async function fetchUsers() {
    try {
      const { data, error } = await supabase.from('DIM_USER').select('*');
      if (error) {
        console.error('Error fetching users:', error);
      } else {
        setUsers(data);
        console.log('Fetched users:', data);
      }
    } catch (err) {
      console.error('Unexpected error:', err);
    }
  };

  return (
    <div>
      <h1>Supabase Test</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
              <span>student: {user.USER_NAME}</span>
                <ul>id: {user.STUDENT_ID}</ul>
                <ul>age: {user.USER_AGE}</ul>
                <ul>pass: {user.USER_PASS}</ul>
                <ul>contact #: {user.USER_CONTACTNUM}</ul>
                <ul>facebook: {user.USER_FB}</ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App