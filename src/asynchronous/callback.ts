export default function callbackSample() {
    
    const url = "https://api.github.com/users/deatiger";

    // 非同期処理をコールバック関数で呼び出す
    const fetchProfile = () => {
        // 非同期処理を実行
        return fetch(url)
        .then((res) => {
            // レスポンスのBodyをJSONで読み取った結果を返す
            res.json()
            .then((json) => {
                console.log("JSONを表示する：", json)
                return json
            })
            .catch((error) => {
                console.error(error)
            })
        })
        .catch((error) => {
            console.error(error)
        })
    }

    const profile = fetchProfile();
    console.log("プロフィールを表示する：", profile) 
}