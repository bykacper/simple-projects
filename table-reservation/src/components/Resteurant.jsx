import React from "react";
import Table from "./Table";

export default function Resteurant() {
    const renderTables = () => {
        const tables = [];
        for(let i = 0; i < 18; i++) {
            tables.push(<Table key={i} table={`table-${i}`}/>)
        }

        return tables;
    }
    return (
        <div className="resteurant">
            <div className="longWall"> </div>
            <div className="window"> </div>
            <div className="longWall"> </div>
            <div className="shortWall"> </div>
            <div className="window"> </div>
            <div className="shortWall"> </div>
            <div className="longWall"> </div>
            <div className="window"> </div>
            <div className="longWall"> </div>
            <div className="shortWall"> </div>
            <div className="window"> </div>
            <div className="shortWall"> </div>
            
            <div className="tables">
            {
                renderTables()
            }
            </div>
        </div>
    )
}