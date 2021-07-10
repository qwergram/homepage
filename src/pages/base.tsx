import NavigationBar from './components/navigation';
import FooterBar from './components/footer';


const Base = ({ children }: { children: React.ReactElement | React.ReactElement[] }) => {
  return (
    <>
      <NavigationBar />
      <div style={{ marginTop: 170 }}>
        {children}
      </div>
      <FooterBar />
    </>
  );
}

export default Base;
