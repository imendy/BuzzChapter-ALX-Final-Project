import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function SignUp() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields.');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok) {
        navigate('/signin');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  const gradientStyle = {
    backgroundImage: "linear-gradient(to left, cyan, blue, purple)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };


  return (
    <div className='min-h-screen mt-16'>
    <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
      {/* left */}
      <div className='flex-1'>
        <Link to='/' className='font-bold dark:text-white text-4xl'>
        Bu
        <span style={gradientStyle}>zz</span>
        Chapter
        </Link>
        <p className='text-sm mt-3 font-medium'>
          You can sign up with your email and password
          or with Google.
        </p>
      </div>


      {/* right */}

      <div className='flex-1'>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit} >
          <div>
            <Label value='Username' />
            <TextInput
              type='text'
              placeholder='Username'
              id='username'
              onChange={handleChange}
            />
          </div>
          <div>
            <Label value='Email Address' />
            <TextInput
              type='email'
              placeholder='name@company.com'
              id='email'
              onChange={handleChange}
            />
          </div>
          <div>
            <Label value='Password' />
            <TextInput
              type='password'
              placeholder='**********'
              id='password'
              onChange={handleChange}
            />
          </div>
          <Button
            gradientDuoTone='purpleToBlue'
            type='submit'
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner size='sm' />
                <span className='pl-3'>Loading...</span>
              </>
            ) : (
              'Sign Up'
            )}
          </Button>
          <OAuth />
        </form>
        <div className='flex gap-2 text-sm mt-5'>
          <span>Have an account?</span>
          <Link to='/signin' className='text-blue-500 hover:underline transition duration-300 font-medium text-md'>
            Sign In
          </Link>
        </div>
        {errorMessage && (
          <Alert className='mt-5 text-center text-md font-medium' color='failure'>
            {errorMessage}
          </Alert>
        )}
      </div>
    </div>
  </div>
  )
}
