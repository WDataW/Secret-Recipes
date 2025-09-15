import { useTheme } from "../context/Theme";
import { primaryBgColors } from "../context/ThemeClasses";
import Nav from "../components/nav/Nav"
import HeroSection from "../components/section/HeroSection";
import RecipesContainer from "../components/recipe/RecipesContainer";
import IntroSection from "../components/section/IntroSection";
import RecipesSection from "../components/recipe/RecipesSection";
import ClosureSection from "../components/section/ClosureSection";
import Footer from "../components/section/Footer";

export const paddingX = " px-[2rem] sm:px-[5rem] md:px-[7rem]";

export default function MainPage({ className = "", children, ...props }) {
    const [theme] = useTheme();
    return (
        <div className={`text-white min-h-screen ${primaryBgColors[theme]} ${className}`} {...props}>
            <Nav></Nav>

            <main className={` overflow-hidden`}>
                <HeroSection></HeroSection>
                <IntroSection></IntroSection>
                <RecipesSection></RecipesSection>
                <ClosureSection></ClosureSection>
                <Footer></Footer>
            </main>
            {children}
        </div>
    );
}