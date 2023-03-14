import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/ui/Card";

export default function Login(){
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  }); 

  const onChangeHandler = (e) => {
    setFormData(state => ({...state, [e.target.name]: e.target.value}));
  };

  return(
    <div className="h-screen flex items-center">
      <div className="max-w-md mx-auto grow -mt-24">
        <Card>
          <h1 className="text-3xl font-bold text-gray-400 text-center">Login</h1>
          <form className="flex flex-col mt-10 mx-12 gap-4">
            <input 
              className="border rounded-lg px-3 py-1 border-gray-300"
              name="username" 
              type="text" 
              placeholder="Username" 
              value={formData.username} 
              onChange={onChangeHandler} />

            <input 
              className="border rounded-lg px-3 py-1 border-gray-300"
              name="password" 
              type="password" 
              placeholder="Password" 
              value={formData.password} 
              onChange={onChangeHandler} />
            <input 
              className="bg-blue text-white px-6 py-1 rounded-md my-4 cursor-pointer"
              type="submit"
              value="Login"
            />
          </form>
          <div className="flex justify-center">
            <span className="text-sm text-bold">Don't have an account? <Link to="/register" className="text-blue border-blue border-b-2 rounded overflow-hidden">Sign up here!</Link></span>
          </div>
        </Card>
      </div>
    </div>
  );
};
