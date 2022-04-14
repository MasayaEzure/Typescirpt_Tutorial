export default function promiseSample() {
    const url = "https://api.github.com/users/deatiger";

    type Profile = {
        id: number
        name: string
    }

    type FetchProfile = () => Promise<Profile | null>

    const fetchProfile: FetchProfile = () => {
        // Promiseからインスタンスを生成
        return new Promise((resolve, reject) => {
            fetch(url)
                .then((res) => {
                    res.json()
                        .then((json: Profile) => {
                            console.log("PromiseからJSONを表示する：", res)
                            // 処理を正しく実行した場合の記述
                            resolve(json)
                        })
                        .catch((error) => {
                            console.error(error)
                            // 処理に失敗し、nullを返す場合の記述
                            reject(null)
                        })
                })
                .catch((error) => {
                    console.error(error)
                    // 処理に失敗し、nullを返す場合の記述
                    reject(null)
                })
        })
    }

    fetchProfile()
        .then((profile: Profile | null) => {
            if (profile) {
                console.log("Promiseからプロフィールを表示する：", profile)
            }
        })
        .catch(() => {

        })

}