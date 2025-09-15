
export default function VerticalPerfection({ className = "", children, ...props }) {
    return (
        <div className={`overflow-hidden ${className}   flex justify-center  items-center `} {...props}>
            <pre style={{ writingMode: "vertical-lr" }} className="infiniteScroll py-[1rem] text-nowrap uppercase ">Politeness    Emails    Respect    First Impressions    Ethics    Clarity    Time Management    Integrity    Organization    Networking</pre>
        </div >
    );
}