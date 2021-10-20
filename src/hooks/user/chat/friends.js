import { useState, useEffect, useCallback, useContext } from "react";

import { ChatContext } from "../../../providers/Chat";
import { getFriend } from "../../../services/user/friends";

export default function Friends(props) {
    const {focus, requestFocus} = useContext(ChatContext);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    const load = useCallback(async () => {
        setLoading(true);
        setData(await getFriend(props?.uid));
        setLoading(false);
    }, [props]);
    
    const handleClick = useCallback(() => requestFocus(props?.uid), [props, requestFocus]);

    useEffect(() => {
        load();
    }, [load])

    return {data, loading, focused: focus === props?.uid, handleClick};
};