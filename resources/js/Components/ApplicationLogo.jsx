export default function ApplicationLogo(props) {
    return (
       <img
            src="/webs-logo.png" // path relative to the public folder
            alt="SmartSched Logo"
            style={{ height: '80px', width: 'auto', marginTop: '5px'}}
            {...props} // so you can still pass Tailwind classes or width/height
        />
    );
}
