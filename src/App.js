import styled from 'styled-components';
import earthSrc from './earth.png';
import amazonIconSrc from './amazon_icon.png';

const HomePage = styled.div`
    background: #111;
    /* font-family: 'Libre Baskerville'; */
    /* font-family: 'DM Serif Display'; */
`;

const StyledH1 = styled.h1`
    font-size: 3em;
    color: #FFFFFF;
    
`;

const StyledH4 = styled.h4`
    color: #CCCCCC;
`;

const EarthImg = styled.img`
  margin-top: 3rem;
  width: 269px;
  height: 252px;

  @media (min-width: 800px) {
    width: 569px;
    height: 552px;
  }
`;

const AmazonIconImg = styled.img`
  width: 125px;
  height: 125px;

  /* @media (min-width: 800px) {
    width: 569px;
    height: 552px;
  } */
`;

const MainPanel = styled.div`
    text-align: center;
    margin-bottom: 3rem;
    color: #FFFFFF;
    margin-top: 6rem;
`;

const SecondaryPanelHeader = styled.h1`
    font-size: 3em;
    color: #111;    
`;

const SecondaryPanel = styled.div`
    position: relative;
    min-height: 400px;
    margin-top: 8rem;
    padding: 20px 0px 70px;
`;

const SecondaryPanelMain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: 95%;
    padding-bottom: 2rem;
    z-index: 1;
    margin: 60px auto 0px;
    text-align: center;
`;

const PanelContent = styled.div`
    text-align: center;
    line-height: 1.5rem;
    width: 70%;
    padding: 1rem;
    color: ${props => (props.light ? 'var(--primary-light)' : 'var(--primary-dark)')};
`;

const PanelScew = styled.div`
    background: #EEE;
    position: absolute;
    top: 50%;
    left: 0px;
    height: 100%;
    width: 100%;
    z-index: 0;
    box-shadow: 0.5rem 0.5rem 0.5rem #777;
    transform: skewY(calc(var(--paperSkew) * var(--skewDir))) translateY(-50%);
    --paperSkew: -5deg;
    --skewDir: ${props => (props.inverted ? 1 : -1)};
`;

const StyledFooter = styled.div`
    background: #111;
    margin-top: 4rem;
    min-height: 150px;
    display: flex;
    justify-content: center;
    color: #FFF;
`;

function App() {
  return (
    <HomePage>
      <MainPanel>
        <StyledH1>The End of the World as We Know It</StyledH1>
        <StyledH1>2020 - 2021</StyledH1>
        <StyledH4>By Patrick J. Kinsella</StyledH4>
        <EarthImg src={earthSrc} width="569px" height="552px" />
      </MainPanel>
      <SecondaryPanel>
        <SecondaryPanelMain>
          <SecondaryPanelHeader>About the Author</SecondaryPanelHeader>
          <PanelContent>
            <h4>
            Patrick Kinsella believes that we are living in what he calls 'The End Times 2020-2021'.
            These end times are leading up to a great warning from above which will give us all one last chance to return to God and have a chance of eternal happiness.
            </h4>
          </PanelContent>
        </SecondaryPanelMain>
        <PanelScew />
      </SecondaryPanel>
      <MainPanel>
        <SecondaryPanelMain>
        <StyledH1>Synopsis</StyledH1>
            <PanelContent>
              <h4>Patrick has studied the prophecies of old and indeed those from our modern history. 
                He has examined in great detail the various apparitions that have ocurred in the world and has pieced together the messages given to the visionaries to form a doomsday picture for us all.
              </h4>
              <h4>
                As we approach the year 2020 - 2021, Patrick looks at how mankind has sunk into a cycle of greed, destruction and murder. He pleads with the reader to examine the evidence of God's Love, and asks that we all prepare for the forthcoming 1,000 years of peace which will see Jesus reign on earth. 
                Whether or not you are a believer Patrick urges that it would be wise and prudent to at least look into all supernatural events happening throughout this world in these End Times.
              </h4>
            </PanelContent>
        </SecondaryPanelMain> 
      </MainPanel>
      <SecondaryPanel>
        <SecondaryPanelMain>
          <SecondaryPanelHeader>The End of the World as We Know It</SecondaryPanelHeader>
          <SecondaryPanelHeader>2020 - 2021</SecondaryPanelHeader>
          <PanelContent>
            <h4>AVAILABLE NOW ON AMAZON</h4>
            <a
              href="https://www.amazon.co.uk/dp/B08Q4NNSR4/ref=cm_sw_r_tw_dp_5YMN7M3BEQCGQ9R1D6RY"
              target="_blank"
              rel="noreferrer">
              <AmazonIconImg src={amazonIconSrc} />
            </a>
          </PanelContent>
        </SecondaryPanelMain>
        <PanelScew inverted />
      </SecondaryPanel>
      <StyledFooter>
      <p>
&copy;Patrick J. Kinsella
        {' '}
        {new Date().getFullYear()}
      </p>
    </StyledFooter>
    </HomePage>
  );
}

export default App;
