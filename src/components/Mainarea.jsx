import React, { useState } from 'react';
import ollama from 'ollama';
import { DNA } from 'react-loader-spinner'; 

const Mainarea = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [loading, setLoading] = useState(false); // State to control spinner visibility

    const textToOutputUsingOllama = async (input) => {
        setLoading(true); // Show the spinner when the llm call starts
        try {
            const response = await ollama.chat({
                model: 'phi',
                messages: [{ role: 'user', content: input }],
            });
            console.log(response.message.content);
            setOutput(response.message.content); // Set the output state with the response
        } catch (error) {
            console.error("Error fetching data from Ollama:", error);
            setOutput("Sorry, there was an error processing your request."); // Handle errors
        } finally {
            setLoading(false); // Hide the spinner after the API call completes
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        textToOutputUsingOllama(input);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevent the default behavior (like line breaks in a textarea)
            handleSubmit(e); // Trigger the submit function
        }
    };

    return (
        <>
            <div className='border-2 w-[97vw] h-[86vh] flex flex-col items-center justify-center rounded-[1rem] mt-5 ml-7 gap-7'>
                <div className='w-[75rem] h-[8rem] border-0 flex flex-col gap-4'>
                    <p className='text-white text-[2rem]'>Input</p>
                    <textarea
                        type="text"
                        placeholder="Why is the sky blue?"
                        className='border-2 w-[76vw] h-[10vh] pl-2 rounded-md bg-[#171717] text-white placeholder:text-[#9e9c9c]'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </div>
                <div className='w-[75rem] h-[18rem] border-0 flex flex-col gap-4'>
                    <p className='text-white text-[2rem]'>Output</p>
                    <textarea
                        placeholder="the color of the sky is a result of the scattering of sunlight by particles in the earth's atmosphere. when white light from the ..."
                        className='border-2 w-[76vw] h-[37vh] pl-2 rounded-md bg-[#171717] text-white placeholder:text-[#9e9c9c]'
                        value={output}
                        readOnly
                    />
                </div>
                <button
                    className='bg-[#656262] hover:bg-black text-white border-2 border-white rounded-[1rem] w-[10rem] h-[3rem]'
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>

            {loading && ( // Show spinner when loading is true
                <div className="flex justify-center mt-6 absolute bottom-[3.3rem] left-[46rem]">
                    <DNA
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper"
                    />
                </div>
            )}
        </>
    );
};

export default Mainarea;
