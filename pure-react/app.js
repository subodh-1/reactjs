const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const Person = props => {
    return React.createElement('div', { className: 'bg-blue-200 p-4 rounded w-full md:w-1/2 lg:w-1/3' }, [
        React.createElement('h1', {className: 'font-bold text-black'},  props.name),
        React.createElement('p', {}, [
            React.createElement('h2', {}, '-- '+ props.occupation),
            React.createElement('span', {}, props.introduction)
        ])
    ]);
}

const App = () => {
        return React.createElement('div', { className: 'bg-slate-600 flex flex-col gap-4 p-4' }, [ // Use flex-col for column layout
        // Div for the heading
        React.createElement('div', {}, [
            React.createElement('h2', {className: 'font-bold text-black'}, "React is rendered now with Tailwind CSS.")
        ]),
        // Div for the person components (Flex container)
        React.createElement('div', { className: 'flex flex-wrap gap-4' }, [ // Flex container for persons
            React.createElement(Person, {name: 'Subodh Choure', occupation: 'Software Engineer', introduction: 'You are welcome! It\'s good to know that correcting the typo resolved the issue and the script is now working. It is always satisfying when a small change makes a big difference in functionality'}, null),
            React.createElement(Person, {name: 'Girish Waghela', occupation: 'Sr. Software Engineer', introduction: 'You are welcome! It\'s good to know'}, null),
            React.createElement(Person, {name: 'Vicky Rajguru', occupation: 'Principle Software Engineer', introduction: 'For more complex projects or if you need to use a wider range of Tailwind classes or customizations, setting up a local Tailwind installation with a build process (like PostCSS) is highly recommended. This allows Tailwind to scan your code and generate the required CSS specifically for your project.'}, null)
        ])
    ]);
}
root.render(React.createElement(App));