import { vi, describe, it, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AptImages } from '@/app/logement/AptImages'


vi.mock('react', async () => {
  const actual = await vi.importActual('react')
  return {
    ...actual,
    useContext: ()=>({
        favoriteApts:[],
        setFavoritesApts:vi.fn()
    })
}})


const images = {
    apt:{
        title:"fake description",
        pictures:[
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg",
        ]
    }
}


describe('Carousel Tests', () => {
    
    it("should render carousel",async ()=>{
       const {container} = render(<AptImages data={images}/>)
        const carousel = container.querySelector(".carousel")
        await userEvent.click(carousel)
        await waitFor(()=>{
            const carouselContainer = container.querySelector(".carousel-container")
            expect(carouselContainer).toBeInTheDocument()
        })
    })


    it("should go to next image ", async ()=>{
       const {container} = render(<AptImages data={images}/>)
        const carousel = container.querySelector(".carousel")
        await userEvent.click(carousel)
        await waitFor(()=>{
            const carouselContainer = container.querySelector(".carousel-container")
            expect(carouselContainer).toBeInTheDocument()
        })
        const slider = container.querySelector(".carousel-images")
        expect(slider).toHaveStyle("transform:translateX(-100%)")

        const nextBtn = screen.getByRole('button', { name: /Slide precedente/i });
        expect(nextBtn).toBeInTheDocument()

        await userEvent.click(nextBtn)

        await waitFor(()=>{
            expect(slider.style.transform).toContain('translateX(-0%)');
        })
    })



    it("should go to previous image ", async ()=>{
        const {container} = render(<AptImages data={images}/>)
        const carousel = container.querySelector(".carousel")
        await userEvent.click(carousel)
        await waitFor(()=>{
            const carouselContainer = container.querySelector(".carousel-container")
            expect(carouselContainer).toBeInTheDocument()
        })
        const slider = container.querySelector(".carousel-images")
        expect(slider).toHaveStyle("transform:translateX(-100%)")

        const prevBtn = screen.getByRole('button', { name: /Slide suivante/i });
        expect(prevBtn).toBeInTheDocument()

        await userEvent.click(prevBtn)

        await waitFor(()=>{
            expect(slider.style.transform).toContain('translateX(-200%)');
        })
    })


    it("should not render arrow buttons ", async ()=>{
        const CaseOneimage = {
            apt:{
                title:"fake description",
                pictures:[
                    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
                ]
            }
        }
        const {container} = render(<AptImages data={CaseOneimage}/>)
        const carousel = container.querySelector(".carousel")
        await userEvent.click(carousel)
        await waitFor(()=>{
            const carouselContainer = container.querySelector(".carousel-container")
            expect(carouselContainer).toBeInTheDocument()
        })

        const nextBtn = screen.queryByRole('button', { name: /Slide suivante/i })
        const prevBtn = screen.queryByRole('button', { name: /Slide precedente/i })

        expect(nextBtn).toBeNull()
        expect(prevBtn).toBeNull()
    })



    it("should close carousel ", async ()=>{
        const {container} = render(<AptImages data={images}/>)
        const carousel = container.querySelector(".carousel")
        await userEvent.click(carousel)
        await waitFor(()=>{
            const carouselContainer = container.querySelector(".carousel-container")
            expect(carouselContainer).toBeInTheDocument()
        })

        const closeBtn = screen.queryByRole('button', { name: /Fermer le carousel/i })
        expect(closeBtn).toBeInTheDocument()

        await userEvent.click(closeBtn)

        await waitFor(()=>{
            const carouselContainer = container.querySelector(".carousel-container")
            expect(carouselContainer).toBeNull()
        })
    })
})