import { ChangeEvent, useState } from "react";
import { supabase } from "../createClient";

function LogInPage() {

    const [input, setInput] = useState<Record<string, string>>({});
    async function handleLogIn(event: React.FormEvent) {
        event.preventDefault();
        const { data, error } = await supabase
            .from('DIM_USER')
            .select('*')
            .eq('STUDENT_ID', input.student_id); // Fetch rows where STUDENT_ID matches the input

        if (error) {
            console.error('Error fetching data:', error.message); // Log error if one occurs
        }
        if (data && data.length > 0) {
            const user = data[0];
            console.log('Fetched data:', data);
            if (user.USER_PASS === input.password) {
                console.log('Login successful:', user);
                alert('Login successful!');
            }
            else{
                alert('Login failed, invalid username or password')
            }
        }
        else {
            console.log('No matching records found.');
        }
        }
        async function handleChange(event: ChangeEvent<HTMLInputElement>) {
            setInput(prevFormData => {
                return {
                    ...prevFormData,
                    [event.target.id]: event.target.value
                }
            })
        }

        return (
            <div>
                <form onSubmit={handleLogIn}>
                    <label htmlFor="student_id">Student ID</label><br />
                    <input type="text" id="student_id" onChange={handleChange}></input><br />
                    <label htmlFor="password" > Password</label><br />
                    <input type="text" id="password" onChange={handleChange}></input><br />
                    <input type="submit" />
                </form>
            </div>
        );

    }

    export default LogInPage;