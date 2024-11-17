import MenuPage from '@/components/templates/MenuPage'

function index({data}) {
  return (
    <MenuPage data={data}/>
  )
}

export default index

// ISR page
export async function getStaticProps() {
    const res = await fetch(`${process.env.BASE_URL}/data`)
    const data = await res.json()

    console.log(data)
    return{
        props : {data},
        revalidate : process.env.REVALIDATE
    }
}