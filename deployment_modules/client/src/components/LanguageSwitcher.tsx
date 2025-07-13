import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const currentLanguageLabel = i18n.language === 'de' ? 'DE: German' : 'EN: English';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => i18n.changeLanguage('en')}>
          EN: English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => i18n.changeLanguage('de')}>
          DE: German
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}