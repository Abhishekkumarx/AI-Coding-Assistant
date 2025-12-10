import { HistoryItem } from '@/types';
import React from 'react'

interface HistoryItemProps{
    history: HistoryItem[];
}
const HistoryPanel=({history}:HistoryItemProps)=>{
    const formatContent = (content:string,maxLength:number=100 ):string=>{
        if(content.length<=maxLength) return content;
        return content.substring(0,maxLength) +"...";
    };

    const getTypeConfig = (type:HistoryItem["type"]) =>{
        switch (type) {
      case "explain":
          return {
            color: "from-purple-500 to-pink-500",
            icon: "🔍",
            bg: "bg-purple-500/10",
          };

      case "debug":
        return {
          color: "from-red-500 to-ornage-500",
          icon: "🐝",
          bg: "bg-red-500/10",
        };

      case "generate":
        return {
          color: "from-green-500 to-blue-500",
          icon: "⚡",
          bg: "bg-green-500/10",
        };
    
      default:
        return {
          color: "from-gray-500 to-gray-600",
          icon: "📝",
          bg: "bg-gray-500/10",
        }
    }
  
    }

    return <div>HistoryPanel</div>
}

function HistoryPanel() {
  return (
    <div>
      
    </div>
  )
}

export default HistoryPanel
