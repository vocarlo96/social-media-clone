import TweetList from "./tweet-list"
import TweetForm from "./tweet-form"

export default function Feed() {

    return (
        <section className='w-full max-w-[50%]'>
            <TweetForm />
            <TweetList />
        </section>
    )
}