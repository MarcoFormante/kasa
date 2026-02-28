import { vi, describe, it, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Apartment } from './Apartment'

vi.mock('@/app/actions/favorites', () => ({
  add: vi.fn().mockResolvedValue({ success: true, error: null }),
  remove: vi.fn(),
}))

const mockSetAlert = vi.fn();

vi.mock('@/app/contexts/AlertContext', () => ({
  useAlert: () => ({
    setAlert: mockSetAlert, // Usa la variabile creata sopra
  }),
}));


let mockFavorites = [{
    id:'1'
}]; 

vi.mock('react', async () => {
  const actual = await vi.importActual('react')
  return {
    ...actual,
    useContext: () => ({
      favoriteApts: mockFavorites, 
      setFavoriteApts: vi.fn(),
    }),
  }
})



const mockApt = {
  id: "1",
  title: "Appartement Test",
  cover: "/test.jpg",
  price: 100,
  slug: "test",
  location: "Paris"
}

describe('Apartment Component', () => {
    beforeEach(() => {
    vi.clearAllMocks();
    mockFavorites = [{ id: '1' }]; // ID 1 è nei favoriti di default
  });
  it('should render the title correctly', () => {
    render(<Apartment {...mockApt} />)
    const title = screen.getByText("Appartement Test")
    expect(title).toBeInTheDocument()
  })

  it('should have the correct schema.org attributes', () => {
    const { container } = render(<Apartment {...mockApt} />)
    const article = container.querySelector('article')
    expect(article).toHaveAttribute('itemtype', 'https://schema.org/Accommodation')
  })


  it('should be in favorite',()=>{
    const {container} = render(<Apartment {...mockApt}/>)
    const favoriteBtn = container.querySelector(".fav-btn")
    expect(favoriteBtn).toHaveClass("fav-btn-main-red")
  })


  it('should not be in favorite',()=>{
    const {container} = render(<Apartment {...mockApt} id={"2"} />)
    const favoriteBtn = container.querySelector(".fav-btn")
    expect(favoriteBtn).not.toHaveClass("fav-btn-main-red")
  })


  it('should show alert if not user connected', async ()=>{
    const {container} = render(<Apartment {...mockApt} id={"2"} />)
    const favoriteBtn = container.querySelector(".fav-btn")
    const errorMessage = "Vous devez vous connecter pour pouvoir ajouter dans les favorit"

    const { add } = await import('@/app/actions/favorites')

    add.mockResolvedValueOnce({ 
        error: { message:errorMessage, isLoginError: true } 
    })

    await userEvent.click(favoriteBtn)

    await waitFor(() => {
        expect(mockSetAlert).toHaveBeenCalledWith(
            expect.objectContaining({
            text: errorMessage,
            color: "red"
            })
        )
        })
    })


    it("should add into favorites",async ()=>{
       beforeEach(() => {
            vi.clearAllMocks();
            mockFavorites = [{ id: '1' }]; 
        });
        const { add } = await import('@/app/actions/favorites')
        add.mockResolvedValueOnce({success:true,error:null})
        const { container } = render(<Apartment {...mockApt} id="2" />)
        const favoriteBtn = container.querySelector(".fav-btn")

        await userEvent.click(favoriteBtn)

        expect(add).toHaveBeenCalledWith("2")

        await waitFor(() => {
            expect(mockSetAlert).toHaveBeenCalledWith(
                expect.objectContaining({
                    color: "green" 
                })
            )
        })
    })


     it("should remove from favorites",async ()=>{
       beforeEach(() => {
            vi.clearAllMocks();
            mockFavorites = [{ id: '1' }]; 
        });
        const { remove } = await import('@/app/actions/favorites')
        remove.mockResolvedValueOnce({success:true,error:null})
        const { container } = render(<Apartment {...mockApt} id="1" />)
        const favoriteBtn = container.querySelector(".fav-btn")

        await userEvent.click(favoriteBtn)

        expect(remove).toHaveBeenCalledWith("1")

        await waitFor(() => {
            expect(mockSetAlert).toHaveBeenCalledWith(
                expect.objectContaining({
                    color: "green" 
                })
            )
        })
    })

})