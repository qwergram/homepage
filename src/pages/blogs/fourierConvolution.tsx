import { Container, Typography } from "@material-ui/core";
import BlogHeader from "../components/blogHeader";


const FourierConvolutionPost = () => {
  return (
    <>
      <BlogHeader 
        title="Fourier Convolution Networks & Intel's New AVX512 ISA" 
        image="https://images.unsplash.com/photo-1625763751455-a2bf939e1d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        tags={["Deep Learning", "Intel"]}
        monthYear="July 2021"
      />
      <Container>
        <Typography gutterBottom variant="h4">Term Definitions</Typography>
        <Typography gutterBottom variant="body1">
          Hello world
        </Typography>
      </Container>
    </>
  );
}

export default FourierConvolutionPost