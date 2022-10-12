import React from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';




const SingleState = ({ stateData }) => {
    return (
        <div>
            <ResponsiveContainer width="95%" height={400}>
                <LineChart width={500}
                    height={300}
                    data={stateData} >

                    <Line
                        type="monotone"
                        dataKey="total"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />

                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SingleState;