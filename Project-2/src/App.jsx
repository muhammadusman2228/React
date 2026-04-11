import Section from "./components/section/section";

const App = () => {
  const customerData = [
    {
        id: 1,
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
        description: "A highly motivated software engineer who constantly explores innovative solutions to solve complex business problems.",
        status: "Satisfactory"
    },
    {
        id: 2,
        imageUrl: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=500&q=80",
        description: "An experienced product manager dedicated to building user-centric designs that improve everyday digital banking experiences.",
        status: "Normal"
    },
    {
        id: 3,
        imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
        description: "Detail-oriented financial analyst who rigorously evaluates market data to ensure maximum profitability and steady growth.",
        status: "Unsatisfactory"
    },
    {
        id: 4,
        imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
        description: "Creative marketing director specializing in dynamic branding campaigns that consistently capture audience attention and engagement.",
        status: "Satisfactory"
    }
];
  return (
  <>
<Section data={customerData}/>
  </>)
  
};
export default App
