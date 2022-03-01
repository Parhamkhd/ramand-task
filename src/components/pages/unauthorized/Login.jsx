import { useForm, Controller } from "react-hook-form";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
const Login = ()=>{ 
  const { handleSubmit, control, reset,formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
    return(
<>
        <Box sx={{width:"500px",margin:"0 auto"}}>
          <Typography variant="h3" component="div" gutterBottom>
          Login
        </Typography>
        </Box>
    <form onSubmit={handleSubmit(onSubmit)}>

        <Box
        sx={{width:"500px",margin:"0 auto"}}
      >
      <Controller
        name="username"
        control={control}
        rules={{ required: true }}
        render={({ field }) =>             
        <TextField 
        
        error={errors.username}
        sx={{display:"flex"}}
         id="outlined-basic"
          label="User Name"
           variant="outlined"
           {...field}
            />}
      />

<Controller
        name="password"
        control={control}
        rules={{ required: true }}
        render={({ field }) =>             
        <TextField 
        sx={{display:"flex",marginTop:"20px"}}
        error={errors.password}

         id="outlined-basic"
          label="User Name"
           variant="outlined"
           {...field}
            />}
      />

        <Button type="submit" sx={{display:"flex",marginTop:"20px"}} variant="contained">Login</Button>
  
      </Box>
    </form>

      </>
    )
}

export default Login;