import { toast } from "../src/toast";

describe('toast', () => {
    it('호출시 동일한 텍스트를 반환한다', () => {
        const currentLang = 'ko';

        const msg = toast(currentLang);

        expect(msg).toBe(currentLang);
    });
});