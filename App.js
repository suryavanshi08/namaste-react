const heading = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", { id: "child1h1" }, "I'm an H1 tag"),
        React.createElement("h2", { id: "child1h2" }, "I'm an H2 tag")
    ]
    ),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", { id: "child2h1" }, "I'm an h1 tag"),
        React.createElement("h2", { id: "child2h2" }, "I'm an h2 child")
    ]
    )
]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);