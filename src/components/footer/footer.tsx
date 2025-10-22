import HomeIcon from '@mui/icons-material/Home';
import clsx from 'clsx';
import { COLORS_CONFIG } from '../../app/config/colors/colors.config';


export function Footer({ className }: { className?: string }) {
  return (
    <div className={clsx('w-full flex justify-between p-5 rounded-3xl bg-[#00000038]', className)}>
      <HomeIcon sx={{ color: COLORS_CONFIG.iconColor }} />
      <HomeIcon sx={{ color: COLORS_CONFIG.iconColor }} />
      <HomeIcon sx={{ color: COLORS_CONFIG.iconColor }} />
    </div>
  );
}
