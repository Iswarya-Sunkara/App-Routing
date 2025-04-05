export default async function Firstblog(){
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return <h1>my first blog post</h1>;
}