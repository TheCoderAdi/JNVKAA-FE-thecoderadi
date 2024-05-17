import { useEffect, useState } from 'react';
export const VisitorCounter = () => {
    const [visitorCount, setVisitorCount] = useState(-1);

    useEffect(() => {

        getVisitorCount();
    }, [])


    const getVisitorCount = async () => {
        try {
            const response = await fetch('https://count.cab/hit/QyCy1Dqv9a');
            const data = await response.json();
            setVisitorCount(data.count + 1000);
        } catch (error) {
            console.log(error);
        }
    }







    return (
        <>

            {
                visitorCount === -1 ? <div className="spinner-border text-primary m-2" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div> : <>
                    <div style={{
                        backgroundColor: "#FF5F00",
                        padding: 10,
                        borderRadius: 40,
                        height: 65,
                        border: "4px solid #FF9F66"
                    }}>


                        <p style={{
                            fontSize: 20,
                            padding: 5,
                            color: 'white',
                            fontWeight: 'bold',
                            fontFamily: 'sans-serif'
                        }}>
                            {visitorCount}
                        </p>


                    </div>
                </>
            }

        </>
    );
}

