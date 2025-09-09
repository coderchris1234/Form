function HomePage() {
    return (
        <div style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "sans-serif"
        }}>
           <h1 style={{
            marginBottom: "10px"
           }}> You are finally here my brother👦 and sister👧👋🤭💐</h1>
           <p style={{
            fontSize: "20px"
           }}>How was the ride coming from the beginning to this end-point??</p>
           <p>Try changing the path <code>http://localhost:5173/home</code> to somthing else, remove just the home and type something else there and see where it will take you to</p>
        </div>
    )
}

export default HomePage
