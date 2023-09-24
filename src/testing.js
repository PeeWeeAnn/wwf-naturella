console.log("testing")

const testAnswers = document.querySelectorAll("p#testAnswer")

const buttonsNext = document.querySelectorAll("div#buttonNext")

const buttonsTrue = document.querySelectorAll("button#buttonTrue")
const buttonsFalse = document.querySelectorAll("button#buttonFalse")

const imagesTrue = document.querySelectorAll("img#imageTrue")
const imagesFalse = document.querySelectorAll("img#imageFalse")

let score = 0

buttonsTrue.forEach((buttonTrue, index) => {
	buttonTrue.addEventListener("click", function () {
		if (buttonTrue.classList.contains("true-active")) {
			buttonTrue.classList.remove("true-active")

			imagesTrue[index].style.display = "none"

			buttonsFalse[index].classList.remove("disable")

			buttonsNext[index].style.display = "none"

			testAnswers[index].style.display = "none"
		} else {
			buttonTrue.classList.add("true-active")

			imagesTrue[index].style.display = "block"

			buttonsFalse[index].classList.remove("false-active")
			buttonsFalse[index].classList.add("disable")

			buttonsNext[index].style.display = "block"

			testAnswers[index].style.display = "block"
		}

		switch (index) {
			case 1:
			case 3:
			case 6:
			case 7:
			case 8:
				score += 1
				break
		}
	})
})

buttonsFalse.forEach((buttonFalse, index) => {
	buttonFalse.addEventListener("click", function () {
		if (buttonFalse.classList.contains("false-active")) {
			buttonFalse.classList.remove("false-active")

			imagesFalse[index].style.display = "none"

			buttonsTrue[index].classList.remove("disable")

			buttonsNext[index].style.display = "none"

			testAnswers[index].style.display = "none"
		} else {
			buttonFalse.classList.add("false-active")

			imagesFalse[index].style.display = "block"

			buttonsTrue[index].classList.remove("true-active")
			buttonsTrue[index].classList.add("disable")

			buttonsNext[index].style.display = "block"

			testAnswers[index].style.display = "block"
		}

		switch (index) {
			case 0:
			case 2:
			case 4:
			case 5:
			case 9:
				score += 1
				break
		}
	})
})

const testItem = document.querySelectorAll(".question-section")

let currentSectionIndex = 0

function showNextSection() {
	if (currentSectionIndex < testItem.length) {
		testItem[currentSectionIndex].style.display = "none"
		currentSectionIndex++
		if (currentSectionIndex < testItem.length) {
			testItem[currentSectionIndex].style.display = "block"
		}
	}
}

buttonsNext.forEach((buttonNext) => {
	buttonNext.addEventListener("click", showNextSection)
	testItem[currentSectionIndex].style.display = "block"
})

function sendScoreToTestResult() {
	sessionStorage.setItem("score", score)
}

const testResultRouteLink = document.querySelector(
	".test-question-buttons__link",
)

if (testResultRouteLink) {
	testResultRouteLink.addEventListener("click", sendScoreToTestResult)
}

function clearSessionStorage() {
	sessionStorage.clear()
}

const retryTestLinks = document.querySelectorAll(
	".test-result-description__button",
)

retryTestLinks.forEach((link) => {
	link.addEventListener("click", clearSessionStorage)
})

const testResults = document.querySelectorAll("section.test-result")

if (testResults.length) {
	testResults.forEach((result) => {
		result.style.display = "none"
	})
}

const sessionStorageScore = sessionStorage.getItem("score")

if (testResults.length && sessionStorageScore) {
	if (sessionStorageScore <= 3) {
		testResults[0].style.display = "block"
	}
	if (sessionStorageScore >= 4 && sessionStorageScore <= 6) {
		testResults[1].style.display = "block"
	}
	if (sessionStorageScore >= 7) {
		testResults[2].style.display = "block"
	}

	if (sessionStorageScore === 1) {
		sentence = "правильный ответ из 10"
	} else if (sessionStorageScore >= 2 && sessionStorageScore <= 4) {
		sentence = "правильных ответа из 10"
	} else if (sessionStorageScore >= 5) {
		sentence = "правильных ответов из 10"
	}
}

const rightAnswersCount = document.querySelectorAll(
	".test-result-description-heading__additional",
)

rightAnswersCount.forEach((answer) => {
	answer.textContent = sessionStorageScore + " " + sentence
})
