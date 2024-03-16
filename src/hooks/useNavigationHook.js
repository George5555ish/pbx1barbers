import { useRouter } from 'next/navigation';

export default function useNavigationHook (routeToGo){
    const router = useRouter()
 
router.push(routeToGo, { scroll: false });
 
}