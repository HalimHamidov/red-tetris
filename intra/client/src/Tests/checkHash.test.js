import { HashFormat, checkHash } from "../actions/checkHash";

test("CheckHash", () => {
    expect(checkHash("")).toBeFalsy();
    expect(checkHash("#Room")).toBeFalsy();
    expect(checkHash("Room[]")).toBeFalsy();
    expect(checkHash("Room[888*/*/88]")).toBeFalsy();
    expect(checkHash("Room[playerName]")).toBeTruthy();
    expect(checkHash("21school[sbersenior]")).toBeTruthy();
});
test("CheckHash Format", () => {
    expect(HashFormat("")).toBeFalsy();
    expect(HashFormat("#Room")).toBeFalsy();
    expect(HashFormat("Room[]")).toBeFalsy();
    expect(HashFormat("Room[888*/*/88]")).toBeFalsy();
    expect(checkHash("Room[playerName]")).toBeTruthy();
    expect(HashFormat("21school[sbersenior]")).toBeTruthy();
});