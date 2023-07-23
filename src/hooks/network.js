import { useSyncExternalStore } from "react";


function subscribe(callback){
    window.addEventListener('online', callback)
    window.addEventListener('offline', callback)
    
    return () => {
      window.removeEventListener('online', callback)
      window.removeEventListener('offline', callback)
    }
}
  
function getSnapShot(){
return navigator.onLine
}

function getServerStatus(){
    // For server generated HTML
    return true;
}

export function useOnlineStatus(){
    const isOnline = useSyncExternalStore(subscribe, getSnapShot, getServerStatus);
    return isOnline;
}
