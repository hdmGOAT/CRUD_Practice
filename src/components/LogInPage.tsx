function LogInPage() {
    return (
        <div>
            <form>
                <label >Student ID</label><br/>
                <input type="text" id= "userid"></input><br/>
                <label >Password</label><br/>
                <input type="text" id= "password"></input><br/>
                <input type="submit"/>
            </form>
        </div>
    );
    
}

export default LogInPage;