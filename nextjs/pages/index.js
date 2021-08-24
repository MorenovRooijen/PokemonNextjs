import PageContainer from "components/PageContainer";
import MijngoedhuisContextProvider from "context/MijngoedhuisContextProvider";
const HomeContext = ({ text }) => {
  return (
    <>
      <PageContainer>
        <>
          <h1>Geweldige pagina</h1>
          <p>{text}</p>
        </>
      </PageContainer>
    </>
  );
};

const Home = (props) => {
  return (
    <MijngoedhuisContextProvider>
      <HomeContext {...props} />
    </MijngoedhuisContextProvider>
  );
};

export async function getStaticProps(context) {
  let result = {};
  result.text =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, rerum.";
  return {
    props: result,
    revalidate: 60, // In seconds
  };
}
export default Home;
