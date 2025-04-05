export default async function Secondblod(){
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return <h1>my second blog post</h1>
}