import { paddingX } from "../../pages/MainPage";

export default function ClosureSection({ className = "", children, ...props }) {
    return (
        <section className={`${paddingX} border-b border-[rgba(0,0,0,0.2)] pb-[2rem] ${className}`} {...props}>
            <h1 className="text-[1.5rem] md:text-[2rem] font-bold mb-[1rem]">Finally</h1>
            <p className="opacity-80 text-[1.1rem]/7.5">Mastering these 10 secret recipes provides a simple yet powerful framework to sharpen your professional skills. Apply them consistently, and you'll not only stand out in the workplace but also build trust, confidence, and lasting relationships. Remember, excellence isn't a single action, it's a series of thoughtful, intentional habits.</p>
        </section>
    );
}